# `route53RecoveryreadinessResourceSet` Submodule <a name="`route53RecoveryreadinessResourceSet` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessResourceSet <a name="Route53RecoveryreadinessResourceSet" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set aws_route53recoveryreadiness_resource_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet(scope: Construct, id: string, config: Route53RecoveryreadinessResourceSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig">Route53RecoveryreadinessResourceSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig">Route53RecoveryreadinessResourceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putResources` <a name="putResources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources"></a>

```typescript
public putResources(value: IResolvable | Route53RecoveryreadinessResourceSetResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53RecoveryreadinessResourceSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList">Route53RecoveryreadinessResourceSetResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference">Route53RecoveryreadinessResourceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetNameInput">resourceSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetTypeInput">resourceSetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourcesInput">resourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetName">resourceSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetType">resourceSetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resources"></a>

```typescript
public readonly resources: Route53RecoveryreadinessResourceSetResourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList">Route53RecoveryreadinessResourceSetResourcesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecoveryreadinessResourceSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference">Route53RecoveryreadinessResourceSetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceSetNameInput`<sup>Optional</sup> <a name="resourceSetNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetNameInput"></a>

```typescript
public readonly resourceSetNameInput: string;
```

- *Type:* string

---

##### `resourceSetTypeInput`<sup>Optional</sup> <a name="resourceSetTypeInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetTypeInput"></a>

```typescript
public readonly resourceSetTypeInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | Route53RecoveryreadinessResourceSetResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Route53RecoveryreadinessResourceSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceSetName`<sup>Required</sup> <a name="resourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetName"></a>

```typescript
public readonly resourceSetName: string;
```

- *Type:* string

---

##### `resourceSetType`<sup>Required</sup> <a name="resourceSetType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetType"></a>

```typescript
public readonly resourceSetType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessResourceSetConfig <a name="Route53RecoveryreadinessResourceSetConfig" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

const route53RecoveryreadinessResourceSetConfig: route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resources">resources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>[]</code> | resources block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetName">resourceSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetType">resourceSetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | Route53RecoveryreadinessResourceSetResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>[]

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resources Route53RecoveryreadinessResourceSet#resources}

---

##### `resourceSetName`<sup>Required</sup> <a name="resourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetName"></a>

```typescript
public readonly resourceSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}.

---

##### `resourceSetType`<sup>Required</sup> <a name="resourceSetType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetType"></a>

```typescript
public readonly resourceSetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecoveryreadinessResourceSetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#timeouts Route53RecoveryreadinessResourceSet#timeouts}

---

### Route53RecoveryreadinessResourceSetResources <a name="Route53RecoveryreadinessResourceSetResources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

const route53RecoveryreadinessResourceSetResources: route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.dnsTargetResource">dnsTargetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | dns_target_resource block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.readinessScopes">readinessScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}. |

---

##### `dnsTargetResource`<sup>Optional</sup> <a name="dnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.dnsTargetResource"></a>

```typescript
public readonly dnsTargetResource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

dns_target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}

---

##### `readinessScopes`<sup>Optional</sup> <a name="readinessScopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.readinessScopes"></a>

```typescript
public readonly readinessScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}.

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}.

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

const route53RecoveryreadinessResourceSetResourcesDnsTargetResource: route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.hostedZoneArn">hostedZoneArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordSetId">recordSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordType">recordType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.targetResource">targetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | target_resource block. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

##### `hostedZoneArn`<sup>Optional</sup> <a name="hostedZoneArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.hostedZoneArn"></a>

```typescript
public readonly hostedZoneArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}.

---

##### `recordSetId`<sup>Optional</sup> <a name="recordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordSetId"></a>

```typescript
public readonly recordSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

##### `recordType`<sup>Optional</sup> <a name="recordType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}.

---

##### `targetResource`<sup>Optional</sup> <a name="targetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.targetResource"></a>

```typescript
public readonly targetResource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#target_resource Route53RecoveryreadinessResourceSet#target_resource}

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

const route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource: route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.nlbResource">nlbResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | nlb_resource block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.r53Resource">r53Resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | r53_resource block. |

---

##### `nlbResource`<sup>Optional</sup> <a name="nlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.nlbResource"></a>

```typescript
public readonly nlbResource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

nlb_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}

---

##### `r53Resource`<sup>Optional</sup> <a name="r53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.r53Resource"></a>

```typescript
public readonly r53Resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

r53_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

const route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource: route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}.

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

const route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource: route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.recordSetId">recordSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}. |

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

##### `recordSetId`<sup>Optional</sup> <a name="recordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.recordSetId"></a>

```typescript
public readonly recordSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

### Route53RecoveryreadinessResourceSetTimeouts <a name="Route53RecoveryreadinessResourceSetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

const route53RecoveryreadinessResourceSetTimeouts: route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource">putTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetHostedZoneArn">resetHostedZoneArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordSetId">resetRecordSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordType">resetRecordType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetTargetResource">resetTargetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetResource` <a name="putTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource"></a>

```typescript
public putTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---

##### `resetHostedZoneArn` <a name="resetHostedZoneArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetHostedZoneArn"></a>

```typescript
public resetHostedZoneArn(): void
```

##### `resetRecordSetId` <a name="resetRecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordSetId"></a>

```typescript
public resetRecordSetId(): void
```

##### `resetRecordType` <a name="resetRecordType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordType"></a>

```typescript
public resetRecordType(): void
```

##### `resetTargetResource` <a name="resetTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetTargetResource"></a>

```typescript
public resetTargetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource">targetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArnInput">hostedZoneArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetIdInput">recordSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordTypeInput">recordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResourceInput">targetResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn">hostedZoneArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId">recordSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType">recordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource"></a>

```typescript
public readonly targetResource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `hostedZoneArnInput`<sup>Optional</sup> <a name="hostedZoneArnInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArnInput"></a>

```typescript
public readonly hostedZoneArnInput: string;
```

- *Type:* string

---

##### `recordSetIdInput`<sup>Optional</sup> <a name="recordSetIdInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetIdInput"></a>

```typescript
public readonly recordSetIdInput: string;
```

- *Type:* string

---

##### `recordTypeInput`<sup>Optional</sup> <a name="recordTypeInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordTypeInput"></a>

```typescript
public readonly recordTypeInput: string;
```

- *Type:* string

---

##### `targetResourceInput`<sup>Optional</sup> <a name="targetResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResourceInput"></a>

```typescript
public readonly targetResourceInput: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneArn`<sup>Required</sup> <a name="hostedZoneArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn"></a>

```typescript
public readonly hostedZoneArn: string;
```

- *Type:* string

---

##### `recordSetId`<sup>Required</sup> <a name="recordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId"></a>

```typescript
public readonly recordSetId: string;
```

- *Type:* string

---

##### `recordType`<sup>Required</sup> <a name="recordType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource">putNlbResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource">putR53Resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetNlbResource">resetNlbResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetR53Resource">resetR53Resource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNlbResource` <a name="putNlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource"></a>

```typescript
public putNlbResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---

##### `putR53Resource` <a name="putR53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource"></a>

```typescript
public putR53Resource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---

##### `resetNlbResource` <a name="resetNlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetNlbResource"></a>

```typescript
public resetNlbResource(): void
```

##### `resetR53Resource` <a name="resetR53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetR53Resource"></a>

```typescript
public resetR53Resource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource">nlbResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource">r53Resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResourceInput">nlbResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53ResourceInput">r53ResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nlbResource`<sup>Required</sup> <a name="nlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource"></a>

```typescript
public readonly nlbResource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a>

---

##### `r53Resource`<sup>Required</sup> <a name="r53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource"></a>

```typescript
public readonly r53Resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a>

---

##### `nlbResourceInput`<sup>Optional</sup> <a name="nlbResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResourceInput"></a>

```typescript
public readonly nlbResourceInput: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---

##### `r53ResourceInput`<sup>Optional</sup> <a name="r53ResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53ResourceInput"></a>

```typescript
public readonly r53ResourceInput: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetRecordSetId">resetRecordSetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetRecordSetId` <a name="resetRecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetRecordSetId"></a>

```typescript
public resetRecordSetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetIdInput">recordSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId">recordSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `recordSetIdInput`<sup>Optional</sup> <a name="recordSetIdInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetIdInput"></a>

```typescript
public readonly recordSetIdInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `recordSetId`<sup>Required</sup> <a name="recordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId"></a>

```typescript
public readonly recordSetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---


### Route53RecoveryreadinessResourceSetResourcesList <a name="Route53RecoveryreadinessResourceSetResourcesList" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get"></a>

```typescript
public get(index: number): Route53RecoveryreadinessResourceSetResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecoveryreadinessResourceSetResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>[]

---


### Route53RecoveryreadinessResourceSetResourcesOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource">putDnsTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetDnsTargetResource">resetDnsTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetReadinessScopes">resetReadinessScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsTargetResource` <a name="putDnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource"></a>

```typescript
public putDnsTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---

##### `resetDnsTargetResource` <a name="resetDnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetDnsTargetResource"></a>

```typescript
public resetDnsTargetResource(): void
```

##### `resetReadinessScopes` <a name="resetReadinessScopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetReadinessScopes"></a>

```typescript
public resetReadinessScopes(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId">componentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource">dnsTargetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResourceInput">dnsTargetResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopesInput">readinessScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes">readinessScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentId`<sup>Required</sup> <a name="componentId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId"></a>

```typescript
public readonly componentId: string;
```

- *Type:* string

---

##### `dnsTargetResource`<sup>Required</sup> <a name="dnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource"></a>

```typescript
public readonly dnsTargetResource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a>

---

##### `dnsTargetResourceInput`<sup>Optional</sup> <a name="dnsTargetResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResourceInput"></a>

```typescript
public readonly dnsTargetResourceInput: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---

##### `readinessScopesInput`<sup>Optional</sup> <a name="readinessScopesInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopesInput"></a>

```typescript
public readonly readinessScopesInput: string[];
```

- *Type:* string[]

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `readinessScopes`<sup>Required</sup> <a name="readinessScopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes"></a>

```typescript
public readonly readinessScopes: string[];
```

- *Type:* string[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessResourceSetResources | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a> | cdktf.IResolvable

---


### Route53RecoveryreadinessResourceSetTimeoutsOutputReference <a name="Route53RecoveryreadinessResourceSetTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessResourceSet } from '@cdktf/provider-aws'

new route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessResourceSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a> | cdktf.IResolvable

---



