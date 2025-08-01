# `route53DomainsDomain` Submodule <a name="`route53DomainsDomain` Submodule" id="@cdktf/provider-aws.route53DomainsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsDomain <a name="Route53DomainsDomain" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain aws_route53domains_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomain(scope: Construct, id: string, config: Route53DomainsDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig">Route53DomainsDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig">Route53DomainsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact">putAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact">putBillingContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer">putNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact">putRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact">putTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact">resetAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy">resetAdminPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact">resetBillingContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy">resetBillingPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears">resetDurationInYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer">resetNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact">resetRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy">resetRegistrantPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact">resetTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy">resetTechPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock">resetTransferLock</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminContact` <a name="putAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact"></a>

```typescript
public putAdminContact(value: IResolvable | Route53DomainsDomainAdminContact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>[]

---

##### `putBillingContact` <a name="putBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact"></a>

```typescript
public putBillingContact(value: IResolvable | Route53DomainsDomainBillingContact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>[]

---

##### `putNameServer` <a name="putNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer"></a>

```typescript
public putNameServer(value: IResolvable | Route53DomainsDomainNameServer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>[]

---

##### `putRegistrantContact` <a name="putRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact"></a>

```typescript
public putRegistrantContact(value: IResolvable | Route53DomainsDomainRegistrantContact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>[]

---

##### `putTechContact` <a name="putTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact"></a>

```typescript
public putTechContact(value: IResolvable | Route53DomainsDomainTechContact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53DomainsDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

---

##### `resetAdminContact` <a name="resetAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact"></a>

```typescript
public resetAdminContact(): void
```

##### `resetAdminPrivacy` <a name="resetAdminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy"></a>

```typescript
public resetAdminPrivacy(): void
```

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetBillingContact` <a name="resetBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact"></a>

```typescript
public resetBillingContact(): void
```

##### `resetBillingPrivacy` <a name="resetBillingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy"></a>

```typescript
public resetBillingPrivacy(): void
```

##### `resetDurationInYears` <a name="resetDurationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears"></a>

```typescript
public resetDurationInYears(): void
```

##### `resetNameServer` <a name="resetNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer"></a>

```typescript
public resetNameServer(): void
```

##### `resetRegistrantContact` <a name="resetRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact"></a>

```typescript
public resetRegistrantContact(): void
```

##### `resetRegistrantPrivacy` <a name="resetRegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy"></a>

```typescript
public resetRegistrantPrivacy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTechContact` <a name="resetTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact"></a>

```typescript
public resetTechContact(): void
```

##### `resetTechPrivacy` <a name="resetTechPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy"></a>

```typescript
public resetTechPrivacy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransferLock` <a name="resetTransferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock"></a>

```typescript
public resetTransferLock(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

route53DomainsDomain.Route53DomainsDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

route53DomainsDomain.Route53DomainsDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

route53DomainsDomain.Route53DomainsDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

route53DomainsDomain.Route53DomainsDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53DomainsDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53DomainsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53DomainsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail">abuseContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone">abuseContactPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact">billingContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer">nameServer</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName">registrarName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl">registrarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList">statusList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact">techContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate">updatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer">whoisServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput">adminContactInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput">adminPrivacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput">billingContactInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput">billingPrivacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput">durationInYearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput">nameServerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput">registrantContactInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput">registrantPrivacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput">techContactInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput">techPrivacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput">transferLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy">adminPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy">billingPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears">durationInYears</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy">registrantPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy">techPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock">transferLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `abuseContactEmail`<sup>Required</sup> <a name="abuseContactEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail"></a>

```typescript
public readonly abuseContactEmail: string;
```

- *Type:* string

---

##### `abuseContactPhone`<sup>Required</sup> <a name="abuseContactPhone" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone"></a>

```typescript
public readonly abuseContactPhone: string;
```

- *Type:* string

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact"></a>

```typescript
public readonly adminContact: Route53DomainsDomainAdminContactList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a>

---

##### `billingContact`<sup>Required</sup> <a name="billingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact"></a>

```typescript
public readonly billingContact: Route53DomainsDomainBillingContactList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `nameServer`<sup>Required</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer"></a>

```typescript
public readonly nameServer: Route53DomainsDomainNameServerList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a>

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact"></a>

```typescript
public readonly registrantContact: Route53DomainsDomainRegistrantContactList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a>

---

##### `registrarName`<sup>Required</sup> <a name="registrarName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName"></a>

```typescript
public readonly registrarName: string;
```

- *Type:* string

---

##### `registrarUrl`<sup>Required</sup> <a name="registrarUrl" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl"></a>

```typescript
public readonly registrarUrl: string;
```

- *Type:* string

---

##### `statusList`<sup>Required</sup> <a name="statusList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList"></a>

```typescript
public readonly statusList: string[];
```

- *Type:* string[]

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `techContact`<sup>Required</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact"></a>

```typescript
public readonly techContact: Route53DomainsDomainTechContactList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts"></a>

```typescript
public readonly timeouts: Route53DomainsDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a>

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate"></a>

```typescript
public readonly updatedDate: string;
```

- *Type:* string

---

##### `whoisServer`<sup>Required</sup> <a name="whoisServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer"></a>

```typescript
public readonly whoisServer: string;
```

- *Type:* string

---

##### `adminContactInput`<sup>Optional</sup> <a name="adminContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput"></a>

```typescript
public readonly adminContactInput: IResolvable | Route53DomainsDomainAdminContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>[]

---

##### `adminPrivacyInput`<sup>Optional</sup> <a name="adminPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput"></a>

```typescript
public readonly adminPrivacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `billingContactInput`<sup>Optional</sup> <a name="billingContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput"></a>

```typescript
public readonly billingContactInput: IResolvable | Route53DomainsDomainBillingContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>[]

---

##### `billingPrivacyInput`<sup>Optional</sup> <a name="billingPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput"></a>

```typescript
public readonly billingPrivacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `durationInYearsInput`<sup>Optional</sup> <a name="durationInYearsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput"></a>

```typescript
public readonly durationInYearsInput: number;
```

- *Type:* number

---

##### `nameServerInput`<sup>Optional</sup> <a name="nameServerInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput"></a>

```typescript
public readonly nameServerInput: IResolvable | Route53DomainsDomainNameServer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>[]

---

##### `registrantContactInput`<sup>Optional</sup> <a name="registrantContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput"></a>

```typescript
public readonly registrantContactInput: IResolvable | Route53DomainsDomainRegistrantContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>[]

---

##### `registrantPrivacyInput`<sup>Optional</sup> <a name="registrantPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput"></a>

```typescript
public readonly registrantPrivacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `techContactInput`<sup>Optional</sup> <a name="techContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput"></a>

```typescript
public readonly techContactInput: IResolvable | Route53DomainsDomainTechContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>[]

---

##### `techPrivacyInput`<sup>Optional</sup> <a name="techPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput"></a>

```typescript
public readonly techPrivacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Route53DomainsDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

---

##### `transferLockInput`<sup>Optional</sup> <a name="transferLockInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput"></a>

```typescript
public readonly transferLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminPrivacy`<sup>Required</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy"></a>

```typescript
public readonly adminPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `billingPrivacy`<sup>Required</sup> <a name="billingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy"></a>

```typescript
public readonly billingPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `durationInYears`<sup>Required</sup> <a name="durationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears"></a>

```typescript
public readonly durationInYears: number;
```

- *Type:* number

---

##### `registrantPrivacy`<sup>Required</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy"></a>

```typescript
public readonly registrantPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `techPrivacy`<sup>Required</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy"></a>

```typescript
public readonly techPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transferLock`<sup>Required</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock"></a>

```typescript
public readonly transferLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsDomainAdminContact <a name="Route53DomainsDomainAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainAdminContact: route53DomainsDomain.Route53DomainsDomainAdminContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType">contactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam">extraParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>[]</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode">zipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam"></a>

```typescript
public readonly extraParam: IResolvable | Route53DomainsDomainAdminContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>[]

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainAdminContactExtraParam <a name="Route53DomainsDomainAdminContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainAdminContactExtraParam: route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainBillingContact <a name="Route53DomainsDomainBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainBillingContact: route53DomainsDomain.Route53DomainsDomainBillingContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType">contactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam">extraParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode">zipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam"></a>

```typescript
public readonly extraParam: IResolvable | Route53DomainsDomainBillingContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainBillingContactExtraParam <a name="Route53DomainsDomainBillingContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainBillingContactExtraParam: route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainConfig <a name="Route53DomainsDomainConfig" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainConfig: route53DomainsDomain.Route53DomainsDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact">adminContact</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>[]</code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy">adminPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact">billingContact</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy">billingPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears">durationInYears</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer">nameServer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact">registrantContact</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>[]</code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy">registrantPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact">techContact</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>[]</code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy">techPrivacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock">transferLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}.

---

##### `adminContact`<sup>Optional</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact"></a>

```typescript
public readonly adminContact: IResolvable | Route53DomainsDomainAdminContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>[]

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}

---

##### `adminPrivacy`<sup>Optional</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy"></a>

```typescript
public readonly adminPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}.

---

##### `billingContact`<sup>Optional</sup> <a name="billingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact"></a>

```typescript
public readonly billingContact: IResolvable | Route53DomainsDomainBillingContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}.

---

##### `billingPrivacy`<sup>Optional</sup> <a name="billingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy"></a>

```typescript
public readonly billingPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}.

---

##### `durationInYears`<sup>Optional</sup> <a name="durationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears"></a>

```typescript
public readonly durationInYears: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer"></a>

```typescript
public readonly nameServer: IResolvable | Route53DomainsDomainNameServer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}.

---

##### `registrantContact`<sup>Optional</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact"></a>

```typescript
public readonly registrantContact: IResolvable | Route53DomainsDomainRegistrantContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>[]

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy"></a>

```typescript
public readonly registrantPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}.

---

##### `techContact`<sup>Optional</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact"></a>

```typescript
public readonly techContact: IResolvable | Route53DomainsDomainTechContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>[]

tech_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}

---

##### `techPrivacy`<sup>Optional</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy"></a>

```typescript
public readonly techPrivacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53DomainsDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}

---

##### `transferLock`<sup>Optional</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock"></a>

```typescript
public readonly transferLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}.

---

### Route53DomainsDomainNameServer <a name="Route53DomainsDomainNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainNameServer: route53DomainsDomain.Route53DomainsDomainNameServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps">glueIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |

---

##### `glueIps`<sup>Optional</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps"></a>

```typescript
public readonly glueIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

### Route53DomainsDomainRegistrantContact <a name="Route53DomainsDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainRegistrantContact: route53DomainsDomain.Route53DomainsDomainRegistrantContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType">contactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam">extraParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>[]</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode">zipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam"></a>

```typescript
public readonly extraParam: IResolvable | Route53DomainsDomainRegistrantContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>[]

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainRegistrantContactExtraParam <a name="Route53DomainsDomainRegistrantContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainRegistrantContactExtraParam: route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTechContact <a name="Route53DomainsDomainTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainTechContact: route53DomainsDomain.Route53DomainsDomainTechContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType">contactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam">extraParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>[]</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode">zipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam"></a>

```typescript
public readonly extraParam: IResolvable | Route53DomainsDomainTechContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>[]

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainTechContactExtraParam <a name="Route53DomainsDomainTechContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainTechContactExtraParam: route53DomainsDomain.Route53DomainsDomainTechContactExtraParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTimeouts <a name="Route53DomainsDomainTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

const route53DomainsDomainTimeouts: route53DomainsDomain.Route53DomainsDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#create Route53DomainsDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#delete Route53DomainsDomain#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/route53domains_domain#update Route53DomainsDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsDomainAdminContactExtraParamList <a name="Route53DomainsDomainAdminContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainAdminContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainAdminContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>[]

---


### Route53DomainsDomainAdminContactExtraParamOutputReference <a name="Route53DomainsDomainAdminContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainAdminContactExtraParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>

---


### Route53DomainsDomainAdminContactList <a name="Route53DomainsDomainAdminContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainAdminContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainAdminContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainAdminContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>[]

---


### Route53DomainsDomainAdminContactOutputReference <a name="Route53DomainsDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam"></a>

```typescript
public putExtraParam(value: IResolvable | Route53DomainsDomainAdminContactExtraParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>[]

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType"></a>

```typescript
public resetContactType(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam"></a>

```typescript
public resetExtraParam(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode"></a>

```typescript
public resetZipCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType">contactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam"></a>

```typescript
public readonly extraParam: Route53DomainsDomainAdminContactExtraParamList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput"></a>

```typescript
public readonly contactTypeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput"></a>

```typescript
public readonly extraParamInput: IResolvable | Route53DomainsDomainAdminContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>[]

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainAdminContact;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>

---


### Route53DomainsDomainBillingContactExtraParamList <a name="Route53DomainsDomainBillingContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainBillingContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainBillingContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>[]

---


### Route53DomainsDomainBillingContactExtraParamOutputReference <a name="Route53DomainsDomainBillingContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainBillingContactExtraParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>

---


### Route53DomainsDomainBillingContactList <a name="Route53DomainsDomainBillingContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainBillingContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainBillingContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainBillingContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>[]

---


### Route53DomainsDomainBillingContactOutputReference <a name="Route53DomainsDomainBillingContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam"></a>

```typescript
public putExtraParam(value: IResolvable | Route53DomainsDomainBillingContactExtraParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>[]

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType"></a>

```typescript
public resetContactType(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam"></a>

```typescript
public resetExtraParam(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode"></a>

```typescript
public resetZipCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType">contactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam"></a>

```typescript
public readonly extraParam: Route53DomainsDomainBillingContactExtraParamList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput"></a>

```typescript
public readonly contactTypeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput"></a>

```typescript
public readonly extraParamInput: IResolvable | Route53DomainsDomainBillingContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>[]

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainBillingContact;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>

---


### Route53DomainsDomainNameServerList <a name="Route53DomainsDomainNameServerList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainNameServerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainNameServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainNameServer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>[]

---


### Route53DomainsDomainNameServerOutputReference <a name="Route53DomainsDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainNameServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps">resetGlueIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueIps` <a name="resetGlueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps"></a>

```typescript
public resetGlueIps(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput">glueIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps">glueIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueIpsInput`<sup>Optional</sup> <a name="glueIpsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput"></a>

```typescript
public readonly glueIpsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `glueIps`<sup>Required</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps"></a>

```typescript
public readonly glueIps: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainNameServer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>

---


### Route53DomainsDomainRegistrantContactExtraParamList <a name="Route53DomainsDomainRegistrantContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainRegistrantContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainRegistrantContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>[]

---


### Route53DomainsDomainRegistrantContactExtraParamOutputReference <a name="Route53DomainsDomainRegistrantContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainRegistrantContactExtraParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>

---


### Route53DomainsDomainRegistrantContactList <a name="Route53DomainsDomainRegistrantContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainRegistrantContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainRegistrantContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainRegistrantContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>[]

---


### Route53DomainsDomainRegistrantContactOutputReference <a name="Route53DomainsDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam"></a>

```typescript
public putExtraParam(value: IResolvable | Route53DomainsDomainRegistrantContactExtraParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>[]

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType"></a>

```typescript
public resetContactType(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam"></a>

```typescript
public resetExtraParam(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode"></a>

```typescript
public resetZipCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType">contactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam"></a>

```typescript
public readonly extraParam: Route53DomainsDomainRegistrantContactExtraParamList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```typescript
public readonly contactTypeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput"></a>

```typescript
public readonly extraParamInput: IResolvable | Route53DomainsDomainRegistrantContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>[]

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainRegistrantContact;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>

---


### Route53DomainsDomainTechContactExtraParamList <a name="Route53DomainsDomainTechContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainTechContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainTechContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>[]

---


### Route53DomainsDomainTechContactExtraParamOutputReference <a name="Route53DomainsDomainTechContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainTechContactExtraParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>

---


### Route53DomainsDomainTechContactList <a name="Route53DomainsDomainTechContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainTechContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get"></a>

```typescript
public get(index: number): Route53DomainsDomainTechContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainTechContact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>[]

---


### Route53DomainsDomainTechContactOutputReference <a name="Route53DomainsDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainTechContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam"></a>

```typescript
public putExtraParam(value: IResolvable | Route53DomainsDomainTechContactExtraParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>[]

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType"></a>

```typescript
public resetContactType(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam"></a>

```typescript
public resetExtraParam(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode"></a>

```typescript
public resetZipCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType">contactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam"></a>

```typescript
public readonly extraParam: Route53DomainsDomainTechContactExtraParamList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput"></a>

```typescript
public readonly contactTypeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput"></a>

```typescript
public readonly extraParamInput: IResolvable | Route53DomainsDomainTechContactExtraParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>[]

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType"></a>

```typescript
public readonly contactType: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainTechContact;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>

---


### Route53DomainsDomainTimeoutsOutputReference <a name="Route53DomainsDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53DomainsDomain } from '@cdktf/provider-aws'

new route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53DomainsDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

---



