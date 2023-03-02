# `route53RecoveryreadinessReadinessCheck` Submodule <a name="`route53RecoveryreadinessReadinessCheck` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessReadinessCheck <a name="Route53RecoveryreadinessReadinessCheck" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check aws_route53recoveryreadiness_readiness_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer"></a>

```typescript
import { route53RecoveryreadinessReadinessCheck } from '@cdktf/provider-aws'

new route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig">Route53RecoveryreadinessReadinessCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig">Route53RecoveryreadinessReadinessCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53RecoveryreadinessReadinessCheckTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct"></a>

```typescript
import { route53RecoveryreadinessReadinessCheck } from '@cdktf/provider-aws'

route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement"></a>

```typescript
import { route53RecoveryreadinessReadinessCheck } from '@cdktf/provider-aws'

route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource"></a>

```typescript
import { route53RecoveryreadinessReadinessCheck } from '@cdktf/provider-aws'

route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference">Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckNameInput">readinessCheckNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetNameInput">resourceSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckName">readinessCheckName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetName">resourceSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference">Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `readinessCheckNameInput`<sup>Optional</sup> <a name="readinessCheckNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckNameInput"></a>

```typescript
public readonly readinessCheckNameInput: string;
```

- *Type:* string

---

##### `resourceSetNameInput`<sup>Optional</sup> <a name="resourceSetNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetNameInput"></a>

```typescript
public readonly resourceSetNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Route53RecoveryreadinessReadinessCheckTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `readinessCheckName`<sup>Required</sup> <a name="readinessCheckName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckName"></a>

```typescript
public readonly readinessCheckName: string;
```

- *Type:* string

---

##### `resourceSetName`<sup>Required</sup> <a name="resourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetName"></a>

```typescript
public readonly resourceSetName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessReadinessCheckConfig <a name="Route53RecoveryreadinessReadinessCheckConfig" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.Initializer"></a>

```typescript
import { route53RecoveryreadinessReadinessCheck } from '@cdktf/provider-aws'

const route53RecoveryreadinessReadinessCheckConfig: route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.readinessCheckName">readinessCheckName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.resourceSetName">resourceSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#id Route53RecoveryreadinessReadinessCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `readinessCheckName`<sup>Required</sup> <a name="readinessCheckName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.readinessCheckName"></a>

```typescript
public readonly readinessCheckName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}.

---

##### `resourceSetName`<sup>Required</sup> <a name="resourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.resourceSetName"></a>

```typescript
public readonly resourceSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#id Route53RecoveryreadinessReadinessCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecoveryreadinessReadinessCheckTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#timeouts Route53RecoveryreadinessReadinessCheck#timeouts}

---

### Route53RecoveryreadinessReadinessCheckTimeouts <a name="Route53RecoveryreadinessReadinessCheckTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts.Initializer"></a>

```typescript
import { route53RecoveryreadinessReadinessCheck } from '@cdktf/provider-aws'

const route53RecoveryreadinessReadinessCheckTimeouts: route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#delete Route53RecoveryreadinessReadinessCheck#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#delete Route53RecoveryreadinessReadinessCheck#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference <a name="Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessReadinessCheck } from '@cdktf/provider-aws'

new route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessReadinessCheckTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a> | cdktf.IResolvable

---



