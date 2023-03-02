# `route53RecoveryreadinessRecoveryGroup` Submodule <a name="`route53RecoveryreadinessRecoveryGroup` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessRecoveryGroup <a name="Route53RecoveryreadinessRecoveryGroup" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group aws_route53recoveryreadiness_recovery_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer"></a>

```typescript
import { route53RecoveryreadinessRecoveryGroup } from '@cdktf/provider-aws'

new route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup(scope: Construct, id: string, config: Route53RecoveryreadinessRecoveryGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig">Route53RecoveryreadinessRecoveryGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig">Route53RecoveryreadinessRecoveryGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells">resetCells</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53RecoveryreadinessRecoveryGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>

---

##### `resetCells` <a name="resetCells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells"></a>

```typescript
public resetCells(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct"></a>

```typescript
import { route53RecoveryreadinessRecoveryGroup } from '@cdktf/provider-aws'

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement"></a>

```typescript
import { route53RecoveryreadinessRecoveryGroup } from '@cdktf/provider-aws'

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource"></a>

```typescript
import { route53RecoveryreadinessRecoveryGroup } from '@cdktf/provider-aws'

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference">Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput">cellsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput">recoveryGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells">cells</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName">recoveryGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference">Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference</a>

---

##### `cellsInput`<sup>Optional</sup> <a name="cellsInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput"></a>

```typescript
public readonly cellsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `recoveryGroupNameInput`<sup>Optional</sup> <a name="recoveryGroupNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput"></a>

```typescript
public readonly recoveryGroupNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Route53RecoveryreadinessRecoveryGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a> | cdktf.IResolvable

---

##### `cells`<sup>Required</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells"></a>

```typescript
public readonly cells: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recoveryGroupName`<sup>Required</sup> <a name="recoveryGroupName" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName"></a>

```typescript
public readonly recoveryGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessRecoveryGroupConfig <a name="Route53RecoveryreadinessRecoveryGroupConfig" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.Initializer"></a>

```typescript
import { route53RecoveryreadinessRecoveryGroup } from '@cdktf/provider-aws'

const route53RecoveryreadinessRecoveryGroupConfig: route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName">recoveryGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells">cells</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `recoveryGroupName`<sup>Required</sup> <a name="recoveryGroupName" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName"></a>

```typescript
public readonly recoveryGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}.

---

##### `cells`<sup>Optional</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells"></a>

```typescript
public readonly cells: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecoveryreadinessRecoveryGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}

---

### Route53RecoveryreadinessRecoveryGroupTimeouts <a name="Route53RecoveryreadinessRecoveryGroupTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.Initializer"></a>

```typescript
import { route53RecoveryreadinessRecoveryGroup } from '@cdktf/provider-aws'

const route53RecoveryreadinessRecoveryGroupTimeouts: route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference <a name="Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53RecoveryreadinessRecoveryGroup } from '@cdktf/provider-aws'

new route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoveryreadinessRecoveryGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a> | cdktf.IResolvable

---



