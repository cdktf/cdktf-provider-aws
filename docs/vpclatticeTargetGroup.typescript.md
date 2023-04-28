# `aws_vpclattice_target_group`

Refer to the Terraform Registory for docs: [`aws_vpclattice_target_group`](https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group).

# `vpclatticeTargetGroup` Submodule <a name="`vpclatticeTargetGroup` Submodule" id="@cdktf/provider-aws.vpclatticeTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeTargetGroup <a name="VpclatticeTargetGroup" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group aws_vpclattice_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

new vpclatticeTargetGroup.VpclatticeTargetGroup(scope: Construct, id: string, config: VpclatticeTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig">VpclatticeTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig">VpclatticeTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig"></a>

```typescript
public putConfig(value: VpclatticeTargetGroupConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: VpclatticeTargetGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config"></a>

```typescript
public readonly config: VpclatticeTargetGroupConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts"></a>

```typescript
public readonly timeouts: VpclatticeTargetGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput"></a>

```typescript
public readonly configInput: VpclatticeTargetGroupConfigA;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VpclatticeTargetGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeTargetGroupConfig <a name="VpclatticeTargetGroupConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

const vpclatticeTargetGroupConfig: vpclatticeTargetGroup.VpclatticeTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config"></a>

```typescript
public readonly config: VpclatticeTargetGroupConfigA;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#config VpclatticeTargetGroup#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpclatticeTargetGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#timeouts VpclatticeTargetGroup#timeouts}

---

### VpclatticeTargetGroupConfigA <a name="VpclatticeTargetGroupConfigA" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

const vpclatticeTargetGroupConfigA: vpclatticeTargetGroup.VpclatticeTargetGroupConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck"></a>

```typescript
public readonly healthCheck: VpclatticeTargetGroupConfigHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#health_check VpclatticeTargetGroup#health_check}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

### VpclatticeTargetGroupConfigHealthCheck <a name="VpclatticeTargetGroupConfigHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

const vpclatticeTargetGroupConfigHealthCheck: vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | matcher block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}.

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds"></a>

```typescript
public readonly healthCheckIntervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}.

---

##### `healthCheckTimeoutSeconds`<sup>Optional</sup> <a name="healthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds"></a>

```typescript
public readonly healthCheckTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}.

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher"></a>

```typescript
public readonly matcher: VpclatticeTargetGroupConfigHealthCheckMatcher;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#matcher VpclatticeTargetGroup#matcher}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}.

---

### VpclatticeTargetGroupConfigHealthCheckMatcher <a name="VpclatticeTargetGroupConfigHealthCheckMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

const vpclatticeTargetGroupConfigHealthCheckMatcher: vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}.

---

### VpclatticeTargetGroupTimeouts <a name="VpclatticeTargetGroupTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

const vpclatticeTargetGroupTimeouts: vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.65.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeTargetGroupConfigAOutputReference <a name="VpclatticeTargetGroupConfigAOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

new vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck"></a>

```typescript
public putHealthCheck(value: VpclatticeTargetGroupConfigHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion"></a>

```typescript
public resetProtocolVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: VpclatticeTargetGroupConfigHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a>

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: VpclatticeTargetGroupConfigHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: string;
```

- *Type:* string

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput"></a>

```typescript
public readonly vpcIdentifierInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeTargetGroupConfigA;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---


### VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

new vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeTargetGroupConfigHealthCheckMatcher;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---


### VpclatticeTargetGroupConfigHealthCheckOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

new vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher">putMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds">resetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds">resetHealthCheckTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount">resetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount">resetUnhealthyThresholdCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatcher` <a name="putMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher"></a>

```typescript
public putMatcher(value: VpclatticeTargetGroupConfigHealthCheckMatcher): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHealthCheckIntervalSeconds` <a name="resetHealthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds"></a>

```typescript
public resetHealthCheckIntervalSeconds(): void
```

##### `resetHealthCheckTimeoutSeconds` <a name="resetHealthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds"></a>

```typescript
public resetHealthCheckTimeoutSeconds(): void
```

##### `resetHealthyThresholdCount` <a name="resetHealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount"></a>

```typescript
public resetHealthyThresholdCount(): void
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher"></a>

```typescript
public resetMatcher(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion"></a>

```typescript
public resetProtocolVersion(): void
```

##### `resetUnhealthyThresholdCount` <a name="resetUnhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount"></a>

```typescript
public resetUnhealthyThresholdCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput">healthCheckIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput">healthCheckTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput">healthyThresholdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput">matcherInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput">unhealthyThresholdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher"></a>

```typescript
public readonly matcher: VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="healthCheckIntervalSecondsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput"></a>

```typescript
public readonly healthCheckIntervalSecondsInput: number;
```

- *Type:* number

---

##### `healthCheckTimeoutSecondsInput`<sup>Optional</sup> <a name="healthCheckTimeoutSecondsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput"></a>

```typescript
public readonly healthCheckTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `healthyThresholdCountInput`<sup>Optional</sup> <a name="healthyThresholdCountInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput"></a>

```typescript
public readonly healthyThresholdCountInput: number;
```

- *Type:* number

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput"></a>

```typescript
public readonly matcherInput: VpclatticeTargetGroupConfigHealthCheckMatcher;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: string;
```

- *Type:* string

---

##### `unhealthyThresholdCountInput`<sup>Optional</sup> <a name="unhealthyThresholdCountInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput"></a>

```typescript
public readonly unhealthyThresholdCountInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds"></a>

```typescript
public readonly healthCheckIntervalSeconds: number;
```

- *Type:* number

---

##### `healthCheckTimeoutSeconds`<sup>Required</sup> <a name="healthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds"></a>

```typescript
public readonly healthCheckTimeoutSeconds: number;
```

- *Type:* number

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeTargetGroupConfigHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---


### VpclatticeTargetGroupTimeoutsOutputReference <a name="VpclatticeTargetGroupTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpclatticeTargetGroup } from '@cdktf/provider-aws'

new vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeTargetGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a> | cdktf.IResolvable

---



